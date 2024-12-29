import classNames from 'classnames/bind';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': activeTabId === tab.id })}
            data-cy="Tab"
          >
            <a
              onClick={() => onTabSelected(tab.id)}
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
