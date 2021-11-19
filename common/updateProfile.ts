import client from './graphql/client';
import { IProfile } from './graphql/interfaces';
import { gql } from '@apollo/client';
import store from '@r';
import { setUser } from '@r/actions/user';


const updateProfile = () => {
	client.query<IProfile>({
		query: gql`
			{
				profile {
					name
					aboutMe
					email
					theme
					avatar {
						name
						type
						path
						pathResized
						isTmp
					}
					roleData {
						name
						key
						permissions
					}
					hashColor
				}
			}
		`
	}).then(
		({ data: { profile } }) => {
			store.dispatch(setUser(profile));
		},
		(error) => console.log(error));
}

export default updateProfile;