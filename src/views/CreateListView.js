import ListView from "@/views/ListView";
import bus from "../utils/bus"

export default function CreateListView(name) {
  return {
    //재사용할 인스턴스(컴포넌트) 옵션들
    name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          })
      }, 3000)

    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}
