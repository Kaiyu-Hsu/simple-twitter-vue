import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      if (!dateTime) return "-";
      return moment(dateTime).fromNow();
    },
  },
};
