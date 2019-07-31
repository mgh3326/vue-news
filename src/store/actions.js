import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data);
      })
      .catch(err =>
        // eslint-disable-next-line no-console
        console.log(err))
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(({data}) => {
          commit('SET_JOBS', data);

        }
      )
      .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      )

  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => {
          commit('SET_ASK', data);
        }
      )
      .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      )

  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => {
          commit('SET_USER', data);
        }
      )
      .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      )
  },
  FETCH_ITEM({commit}, itemId) {
    fetchCommentItem(itemId)
      .then(({data}) => {
          commit('SET_ITEM', data);
        }
      )
      .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      )
  },
}
