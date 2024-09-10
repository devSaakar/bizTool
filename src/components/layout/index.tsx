import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "../common/Header"
import { FC } from "react";

interface LayoutProps{
    children: React.ReactNode;
  
}

const Layout : FC<LayoutProps> = ({children}) => {
  return (
    <ThemedLayoutV2 Header={Header} Title={(titleProps)=><ThemedTitleV2 {...titleProps} text="BizTool" />}>{children}</ThemedLayoutV2>
  )
}

export default Layout