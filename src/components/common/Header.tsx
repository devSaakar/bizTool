import CurrentUser from '../layout/CurrentUser'
import { Layout, Space } from 'antd'

const headerStyles: React.CSSProperties = {
    background: '#fff',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    padding: "0 24px",
    position: 'sticky',
    top: 0,
    zIndex: 999,
  
}

const Header = () => {
  return (
    <Layout.Header style={headerStyles}>
        <Space align='center' size={"middle"}>
        <CurrentUser />
        </Space>
    </Layout.Header>
  )
}

export default Header