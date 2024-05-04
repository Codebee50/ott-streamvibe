import { ConfigProvider } from "antd";

const AntdUiConfig = (props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E50000",
          colorBgContainer: "141414",
          colorBorder: "#999999",
        },
        components: {
          Pagination: {
            itemActiveBg: "#141414",
            colorText: "#999999",
            itemInputBg: "#141414",
            colorBgTextActive: "#E50000",
            colorPrimaryHover: "#E50000",
            colorBgContainer: "#141414",

            colorTextDisabled: "#999999",
          },
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export default AntdUiConfig;
