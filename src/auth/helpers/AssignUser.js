
export const AssignUser = () => {
    const user = (user, context, callback) => {

        const count = context.stats && context.stats.loginsCount ? context.stats.loginsCount : 0;
        if (count > 1) {
            return callback(null, user, context);
        }

        const ManagementClient = require('auth0@2.27.0').ManagementClient;
        const management = new ManagementClient({
            token: auth0.accessToken,
            domain: auth0.domain
        });

        const params = { id: user.user_id };
        const data = { "roles": ["ROLE_ID_1", "ROLE_ID_2"] };

        management.users.assignRoles(params, data, function (err, user) {
            if (err) {
                // Handle error.
                console.log(err);
            }
            callback(null, user, context);
        });

    }

    return (
        <div>AssignUser</div>
    )
}
