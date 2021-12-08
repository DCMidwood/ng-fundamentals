import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
    </div>
    `
})
export class EventsListComponent {
    event1={
        id:1,
        name:'Angular Connect',
        date:'26/9/2036',
        time:'10:00 am',
        price: 599.99,
        imageURL: '/assets/images/angularconnnect-shield.png',
        location: {
            address:'1045 DT',
            city:'London',
            country:'England'
            }
    }
    handleEventClicked(data: any){
        console.log('recieved:', data)
    }
}
