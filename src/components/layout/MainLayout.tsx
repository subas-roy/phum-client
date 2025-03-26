import { Layout, Menu, MenuProps } from 'antd';
const { Content, Footer, Header, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'asdf',
    label: 'Dashboard',
  },
  {
    key: 'asdfg',
    label: 'Profile',
  },
  {
    key: 'asdfgh',
    label: 'User Management',
    children: [
      {
        key: 'ssd',
        label: 'Create Admin',
      },
      {
        key: 'sdd',
        label: 'Create Student',
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
