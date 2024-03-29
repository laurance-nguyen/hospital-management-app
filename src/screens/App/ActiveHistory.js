import React from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet } from 'react-native';
import { useQuery } from 'react-apollo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Typography, Block, Card, Badge } from 'src/components';
import { theme, localization, generalStyles } from 'src/constants';
import AppData from 'src/AppData';
import { ACTIVE_EVENTS_BY_DEVICE } from 'src/utils/graphqlQueries';
import graphqlErrorHandler from 'src/utils/graphqlErrorHandler';

const TextPackage = localization[AppData.language];

const ActiveHistory = ({ navigation }) => {
  const { deviceId } = navigation.state.params;
  const { data, loading, error } = useQuery(ACTIVE_EVENTS_BY_DEVICE, {
    variables: { deviceId }
  });

  if (loading) {
    return (
      <Block middle center>
        <ActivityIndicator />
      </Block>
    );
  }

  if (error) {
    graphqlErrorHandler(error, () => {
      navigation.goBack();
    });
    return null;
  }

  const {
    activeEventsByDevice: { data: events }
  } = data;

  if (events.length === 0) {
    return (
      <Block middle center>
        <Image style={generalStyles.image} source={require('src/assets/images/no_data.jpg')} />
        <Block center padding={[0, theme.sizes.base * 5]}>
          <Typography bold title uppercase>
            {TextPackage.NO_DATA}
          </Typography>
          <Typography center gray>
            {TextPackage.NO_DATA_MESSAGE}
          </Typography>
        </Block>
      </Block>
    );
  }

  return (
    <ScrollView>
      <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
        {events.reverse().map(event => (
          <Card key={event.id} center middle shadow row fullWidth padding={theme.sizes.base}>
            <Badge
              size={56}
              color={event.actionType ? 'rgba(41,216,143,0.20)' : 'rgba(243,83,74,0.2)'}
            >
              <Icon
                name={event.actionType ? 'power-plug' : 'power-plug-off'}
                size={36}
                color={event.actionType ? theme.colors.green : theme.colors.redDark}
              />
            </Badge>
            <Block padding={[0, theme.sizes.base]}>
              <Typography bold body>
                {`${event.creator.lastName} ${event.creator.firstName}`}
              </Typography>
              <Typography gray caption>
                {`${TextPackage.CREATED_AT}: ${event.createdAt.toLocaleDateTimeString()}`}
              </Typography>
              {!event.actionType && (
                <Typography gray caption>
                  {`${TextPackage.USED_TIME}: ${event.usedInterval.milliSecToDuration()}`}
                </Typography>
              )}
            </Block>
          </Card>
        ))}
        <Typography title gray center style={styles.EOLPadding}>
          {TextPackage.END_OF_LIST}
        </Typography>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  EOLPadding: {
    paddingVertical: theme.sizes.base
  }
});

ActiveHistory.navigationOptions = () => ({
  title: TextPackage.ACTIVE_HISTORY
});

export default ActiveHistory;
