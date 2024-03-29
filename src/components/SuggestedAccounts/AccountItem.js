// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1664766000&x-signature=gmWJH9LCzLmVi%2Fr7n4sm8K46TYw%3D"
        alt=""
      />
      <div className={cx('item-info')}>
        <h4 className={cx('nickname')}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
      </div>
    </div>
  );
}

AccountItem.protoTypes = {};

export default AccountItem;
