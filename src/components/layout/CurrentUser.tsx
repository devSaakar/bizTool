import { Button, Popover } from "antd"
import MyAvatar from "../common/MyAvatar"
import { useGetIdentity } from "@refinedev/core"
import { User } from "@/graphql/schema.types"
import { Text } from "../common/Text"
import { SettingOutlined } from "@ant-design/icons"
import { useState } from "react"
import { AccountSettings } from "../AccountSettings"


const CurrentUser = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {data:user} = useGetIdentity<User>()

    const content = (<div style={{display:'flex',flexDirection: 'column'}}>
        <Text strong style={{padding:'12px 20px'}}>{user?.name}</Text> 
        <div style={{border:"1px solid #d9d9d9",padding:"4px" , display:"flex" , flexDirection:"column",gap:"4px" }}>
        <Button style={{textAlign:'left'}} icon={<SettingOutlined />} type="text" block onClick={()=>setIsOpen(true)}>
        Account Settings</Button></div>
    </div>)
  return (
    <>
    <Popover placement={"bottomRight"} trigger={"click"} content={content} overlayInnerStyle={{padding:0}} overlayStyle={{zIndex:999}}>
        <MyAvatar name={user?.name ||""} src={user?.avatarUrl} size="default" style={{cursor:"pointer"}} />
    </Popover>
    {user && <AccountSettings userId={user.id} opened={isOpen} setOpened={setIsOpen} />}
    </>
  )
}

export default CurrentUser