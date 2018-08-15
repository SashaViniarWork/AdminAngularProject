import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(usersList: any, term: any): any {
    if (!term) {
      return usersList;
    } else {
      return usersList.filter( users => {
          const row: string = users.name.toLowerCase() + ' ' + users.surname.toLocaleString() +
            ' ' + users.phone.toLowerCase() + ' ' + users.email.toLowerCase() + ' ' + users.position.toLowerCase() +
            ' ' + users.birthday.toLowerCase();
          users = row.includes(term.toLowerCase());
          return users;
      });
    }
  }

}
