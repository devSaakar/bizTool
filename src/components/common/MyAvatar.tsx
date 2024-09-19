import { getNameInitials } from "@/utilities";
import { Avatar, AvatarProps } from "antd";
import { FC } from "react";
interface MyAvatarProps extends AvatarProps {
  name: string;
}
const MyAvatar: FC<MyAvatarProps> = ({ name, style, ...rest }) => {
  return (
    <Avatar
      alt={name}
      size={"small"}
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name)}
    </Avatar>
  );
};

export default MyAvatar;
