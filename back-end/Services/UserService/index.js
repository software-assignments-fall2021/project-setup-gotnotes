let userData = require('./../../Mock/UsersMockData/users.json')

/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
const get_user = function (email) {
    return userData.filter(user => user.userID === email)
}

/**
 * Get a user by the username
 * @param {*} username 
 * @returns [{userObj}] || []
 */
const get_user_by_username = function (username) {
    return userData.filter(user => user.username === username)
}

/**
 * Return the pass hash of a user with given email, if no such user return null
 * @param {*} email 
 * @returns String || null
 */
const get_user_pass_hash = function (email) {
    const user = get_user(email)[0];
    if (user?.passwordHash)
        return user.passwordHash
    return null;
}

const set_user_pass_hash = function (email, newPassHash) {
    const currentUser = get_user(email)[0][0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.passwordHash = newPassHash;

    userData.push(currentUser);

    return 0;
}

/**
 * Checks whether user with given email is an admin, returns true if admin, false if not
 * @param {*} email 
 * @returns boolean
 */
const get_user_authority = function (email) {
    return get_user(email)[0][0].isAdmin;
}

const set_user_authority = function (email, newAuthority) {
    const currentUser = get_user(email)[0][0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.isAdmin = newAuthority;

    userData.push(currentUser);

    return 0;
}

/**
 * Return the avatar url of the user with given email
 * @param {*} email 
 * @returns String || null
 */
const get_user_avatar_url = function (email) {
    const user = get_user(email)[0];
    if (user?.userAvatarUrl)
        return user.userAvatarUrl
    return null;
}

/**
 * sets the new user avatar url for the user with given email, returns 0 if success, 1 if no such user
 * @param {*} email 
 * @param {*} newAvatarUrl 
 * @returns 1 || 0
 */
const set_user_avatar_url = function (email, newAvatarUrl) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.userAvatarUrl = newAvatarUrl;

    userData.push(currentUser);

    return 0;

}

const get_user_first_name = function (email) {
    const user = get_user(email)[0];
    if (user?.firstName)
        return user.firstName
    return null;
}

const set_user_first_name = function (email, newFirstName) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.firstName = newFirstName;

    userData.push(currentUser);

    return 0;

}

const get_user_last_name = function (email) {
    const user = get_user(email)[0];
    if (user?.lastName)
        return user.lastName
    return null;
}

const set_user_last_name = function (email, newLastName) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.lastName = newLastName;

    userData.push(currentUser);

    return 0;

}

const get_user_uni = function (email) {
    const user = get_user(email)[0];
    if (user?.userUni)
        return user.userUni
    return null;
}

const set_user_uni = function (email, newUniId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser[0].userUni = newUniId;

    userData.push(currentUser);

    return 0;

}



const get_user_subscribed = function (email) {
    const user = get_user(email)[0];
    if (user?.userSubscribed)
        return user.userSubscribed
    return null;
}

const set_user_subscribed_subscribe_course = function (email, addedCourseId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    const addedCourseData = { courseID: addedCourseId }

    currentUser[0].userSubscribed.push(addedCourseData);

    userData.push(currentUser);

    return 0;

}

const set_user_subscribed_unsubscribe_course = function (email, removedCourseId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser[0].userSubscribed = currentUser[0].
        userSubscribed.
        filter(course =>
            course.courseID !== removedCourseId
        )

    userData.push(currentUser);

    return 0;

}


const get_user_liked = function (email) {
    const user = get_user(email)[0];
    if (user?.userLiked)
        return user.userLiked
    return null;
}

const get_user_liked_count = function (email) {
    const user = get_user(email)[0];
    if (user?.userLiked)
        return user.userLiked.length
    return null;
}
const set_user_liked_like_file = function (email, addedFileId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    const addedFileData = { fileID: addedFileId }

    currentUser[0].userLiked.push(addedFileData);

    userData.push(currentUser);

    return 0;

}

const set_user_liked_unlike_file = function (email, removedFileId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser[0].userLiked = currentUser[0].
        userLiked.
        filter(file =>
            file.fileID !== removedFileId
        )

    userData.push(currentUser);

    return 0;

}

const get_user_disliked = function (email) {
    const user = get_user(email)[0];
    if (user?.userDisliked)
        return user.userDisliked
    return null;
}
const get_user_disliked_count = function (email) {
    const user = get_user(email)[0];
    if (user?.userDisliked)
        return user.userDisliked.length
    return null;
}

const set_user_disliked_dislike_file = function (email, addedFileId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    const addedFileData = { fileID: addedFileId }

    currentUser[0].userDisliked.push(addedFileData);

    userData.push(currentUser);

    return 0;

}

const set_user_disliked_undislike_file = function (email, removedFileId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser[0].userDisliked = currentUser[0].
        userLiked.
        filter(file =>
            file.fileID !== removedFileId
        )

    userData.push(currentUser);

    return 0;

}

const get_user_comment = function (email) {
    const user = get_user(email)[0];
    if (user?.userComments)
        return user.userComments
    return null;
}

const get_user_comment_count = function (email) {
    const user = get_user(email)[0];
    if (user?.userComments)
        return user.userComments.length
    return null;
}

const set_user_comment_add_comment = function (email, addedCommentId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    const addedCommentData = { commentId: addedCommentId }

    currentUser[0].userComments.push(addedCommentData);

    userData.push(currentUser);

    return 0;

}

const set_user_comment_delete_comment = function (email, removedCommentId) {
    const currentUser = get_user(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser[0].userComments = currentUser[0].
        userLiked.
        filter(comment =>
            comment.commentId !== removedCommentId
        )

    userData.push(currentUser);

    return 0;

}



const get_users_by_course_id = function (course_id) {
    const students_by_course = [];
    userData.map((user) => {
        let count = 0;
        user.userSubscribed.map((course) => course.courseID === course_id && count++)
        count > 0 && students_by_course.push({ username: user.username, userSubscribed: user.userSubscribed })
    })

    return students_by_course;
}




//console.log(get_student_by_id(10))

console.log(get_students_by_course_id(11))

