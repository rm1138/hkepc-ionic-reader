/**
 * Created by Gaplo917 on 9/1/2016.
 */
module.exports = {
  domain: 'http://www.hkepc.com/',
  forum: {
    image:'/forum/',
    index: '/forum/index.php',
    topics: (topicId,page) => `/forum/forumdisplay.php?fid=${topicId}&page=${page}`,
    posts: (topicId,postId,page) => `/forum/viewthread.php?fid=${topicId}&tid=${postId}&page=${page}`,
    login: '/forum/logging.php?action=login&loginsubmit=yes&floatlogin=yes&inajax=1',
    reply: (topicId,postId) => `/forum/post.php?action=reply&fid=${topicId}&tid=${postId}&extra=&replysubmit=yes&infloat=yes&handlekey=fastpost&inajax=1`
  },

  data:{
  }
}