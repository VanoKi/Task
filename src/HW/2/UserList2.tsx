import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType, ValueType} from './HW2';

type UserList2PropsType = {
	users: any // пропиши типизацию
	filterUsers: any
};

type List2Type = {
	users: UsersObjectType
	filterUsers: (value: ValueType) => void
}

export const UserList2 = (props: List2Type) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers('A')}>SHOW ME FRIENDS FROM LA</button>
			<button id={'hw02-filter-button'} onClick={() => props.filterUsers('B')}>SHOW ME FRIENDS FROM SF</button>

			<ul>
			  {props.users.myFriends.map((user: UserType) => (
			    <CurrentUser user={user}/>
			  ))}
			</ul>
		</div>
	);
};
