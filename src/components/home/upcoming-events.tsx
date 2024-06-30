import { CalendarOutlined } from '@ant-design/icons';
import { Badge, Card, List } from 'antd';
import React, { useState } from 'react';
import { Text } from '../text';
import UpcomingEventsSkeleton from '../skeletons/upcoming-events';
import { useList } from '@refinedev/core';
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from '@/graphql/queries';
import { getDate } from '@/utilities/helpers/get-date';
import dayjs from 'dayjs';

export default function UpcomingEvents() {
  const { data, isLoading } = useList({
    resource: 'events',
    pagination: { pageSize: 5 },
    sorters: [
      {
        field: 'startDate',
        order: 'asc',
      },
    ],
    filters: [
      {
        field: 'startDate',
        operator: 'gte',
        value: dayjs().format('YYYY-MM-DD'),
      },
    ],
    meta: {
      gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY,
    },
  });

  return (
    <Card
      style={{ height: '100%' }}
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
          }}
        >
          <CalendarOutlined />
          <Text size="sm" style={{ marginLeft: '0.7rem' }}>
            Upcoming Events
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, index) => ({
            id: index,
          }))}
          renderItem={() => <UpcomingEventsSkeleton />}
        ></List>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data?.data || []}
          renderItem={(item) => {
            const renderDate = getDate(item.startDate, item.endDate);
            console.log(renderDate);
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color={item.color} />}
                  title={<Text size="xs">{renderDate}</Text>}
                  description={
                    <Text ellipsis={{ tooltip: true }} strong>
                      {item.title}
                    </Text>
                  }
                />
              </List.Item>
            );
          }}
        >
          {!isLoading && data?.data?.length === 0 && (
            <span>No upcoming events</span>
          )}
        </List>
      )}
    </Card>
  );
}
