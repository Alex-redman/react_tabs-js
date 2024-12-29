import classNames from 'classnames/bind';
import { useState } from 'react';

export const Tabs = ({ tabs, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = tabId => {
    setActiveTab(tabId);
    onTabSelect(tabId);
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({ 'is-active': activeTab === tab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              onClick={() => handleTabClick(tab.id)}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
