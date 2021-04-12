import React, {useMemo} from "react";
import {useParams, Link} from 'react-router-dom';

export const Dynamic = () => {
  const {parent} = useParams();
  const components = {
    home: Home,
    about: About,
    users: Users,
  };

  const ComponentName = components[parent];

  return useMemo(() => {
    return <ComponentName/>;
  }, [parent])

}


function Nav() {
  return  <nav>
    <ul>
      <li>
        <Link to="1"> {Math.random()}</Link>
      </li>
      <li>
        <Link to="2">About</Link>
      </li>
      <li>
        <Link to="3">Users</Link>
      </li>
    </ul>
  </nav>
}

function Home() {

  return <div>
   <Nav/>
    Home
  </div>;
}

function About() {
  return <div>
    <Nav/>
    About
  </div>;
}

function Users() {
  return <div>
    <Nav/>
    Users
  </div>;
}
