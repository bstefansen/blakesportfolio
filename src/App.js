import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout >
        <Header className="header-color" title="Blake Stefansen" scroll>
            <Navigation style={{fontSize: "150%"}}>
              <Link to="/myportfoliosite/">Home</Link>
              <Link to="/myportfoliosite/resume">Resume</Link>
              <Link to="/myportfoliosite/projects">Projects</Link>
              <Link to="/myportfoliosite/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Blake Stefansen">
            <Navigation>
              <Link to="/myportfoliosite/">Home</Link>
              <Link to="/myportfoliosite/resume">Resume</Link>
              <Link to="/myportfoliosite/projects">Projects</Link>
              <Link to="/myportfoliosite/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
