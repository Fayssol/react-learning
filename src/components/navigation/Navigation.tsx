import { SideNavigation } from "@cloudscape-design/components";
import { useContext } from "react";
import { AppContext } from "../../root/context";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const { activeNavigation, setActiveNavigation } = useContext(AppContext);
  const navigate = useNavigate();
  return <SideNavigation
    activeHref={activeNavigation}
    onFollow={(event) => {
      event.preventDefault();
      const href = event.detail.href;
      setActiveNavigation(href === '/' ? '/home' : href);
      navigate(href);
    }}
    header={{
      href: '/',
      text: 'Askia Solution',
    }}
    items={[
      { type: 'link', text: `Home`, href: `/home` },
      { type: 'link', text: `Transactions`, href: `/transactions` },
      { type: 'link', text: `About`, href: `/about` },
      { type: 'link', text: `Departments`, href: `/departments` },
    ]}
  />
}

export default Navigation;