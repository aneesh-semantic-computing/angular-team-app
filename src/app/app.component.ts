import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Generator App';
  newMemberName:string = "";
  memberList:string[] = [];
  errorMessage = "";
  teamSize:number | "" = "";
  teams: string[][] = [];
  onChangeMember = (member:string) => {
    this.newMemberName = member;
  }
  addMember = () => {
    if (!this.newMemberName) {
      this.errorMessage = "Name is required";
      return;
    }
    this.errorMessage = "";
    this.memberList.push(this.newMemberName);
    this.newMemberName = "";
  }
  onChangeTeamSize = (size:string) => {
    this.teamSize = Number(size);
  }
  generateTeams = () => {
    if (!this.teamSize || this.memberList.length < this.teamSize) {
      this.errorMessage = "Please enter correct team size";
      return;
    }
    this.errorMessage = "";
    const allMembers = [...this.memberList];
    while(allMembers.length) {
      for (let i=0; i < this.teamSize; i++) {
       const randomIndex = Math.floor(Math.random() * allMembers.length);
       const member = allMembers.splice(randomIndex, 1)[0];
       if (!member) break;
       if(this.teams[i]) {
        this.teams[i].push(member);
       } else {
        this.teams[i] = [member];
       }
      }
    }
    this.memberList = [];
    this.teamSize = "";
  }
}
