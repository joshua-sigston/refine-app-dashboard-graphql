import { getNameInitials } from '@/utilities';
import { Avatar as AntdAvatar, AvatarProps } from 'antd';

type Props = AvatarProps & {
  name?: string;
};

export default function CustomAvatar({ name, style, ...rest }: Props) {
  return (
    <AntdAvatar
      alt={'John Doe'}
      size="small"
      style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  );
}
