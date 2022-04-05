import React from 'react';

function LinkItem({ nameLink }) {
  return (
    <div className="link_list">
      <nav>
        <ul>
          <li>
            <a href="#">{nameLink}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default LinkItem;
