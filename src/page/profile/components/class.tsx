import { ReactComponent as Icon } from '../../../assets/profile/image/svg/i-icon.svg';
import _ from 'lodash';

type profileClass_Type = {
  userClass: {
    userClass: string;
    userClassMilege: number;
    userClassPoint: number;
    userClassCoupon: number;
  };
};

const profileClassList = ['Milege', 'Cash Point', 'Coupon'];

export default function ProfileClass({ userClass }: profileClass_Type) {
  return (
    <div className='profileClass'>
      <div className='profileClass_upper'>
        <div className='profileClass_upper-membership'>
          <p>Membership</p>
          <Icon />
        </div>
        <div className='profileClass_upper-className'>
          <p>{userClass.userClass}</p>
          <p>Collector</p>
        </div>
      </div>
      <ul className='profileClass_lower'>
        {_.map(profileClassList, (o) => {
          let num: number = 0;
          switch (o) {
            case 'Milege':
              num = userClass.userClassMilege;
              break;
            case 'Cash Point':
              num = userClass.userClassPoint;
              break;
            case 'Coupon':
              num = userClass.userClassCoupon;
              break;
          }
          return (
            <li>
              <div>
                <p>{o}</p>
                <p>{num}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
