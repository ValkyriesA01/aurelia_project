import moment from 'moment';
  
  export class DateFormatValueConverter {
    toView(value) {
      return moment(value).format('MM/DD/YYYY H:mm:ss');
    }
  }