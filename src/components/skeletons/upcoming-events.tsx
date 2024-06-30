import { Skeleton } from 'antd';

export default function UpcomingEventsSkeleton() {
  return (
    <Skeleton
      style={{
        marginTop: '2em',
        border: '2px solid gray',
        padding: '1em',
        borderRadius: '.5rem',
      }}
      title={true}
      paragraph={{ rows: 1 }}
    ></Skeleton>
  );
}
