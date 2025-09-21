// Meetup configurations
export const meetupSections = [
  {
    id: 'upcoming',
    title: 'Upcoming Meetups',
    subtitle: 'Join us at these exciting upcoming events across India',
    description: 'Discover amazing opportunities to connect with fellow Saranda members in various cities. Register now to secure your spot at these upcoming gatherings!',
    stats: [
      { label: 'Cities', value: '9 Locations' },
      { label: 'Expected', value: '750+ Members' },
      { label: 'Duration', value: 'Oct 2025 - Feb 2026' }
    ],
    photos: [
      {
        gradient: 'from-blue-500 to-blue-700',
        content: (
          <div>
            <div className="text-xs mb-1">MUMBAI</div>
            <div className="text-sm font-bold">OCT 15, 2025</div>
            <div className="text-xs mt-1">Marine Drive</div>
          </div>
        )
      },
      {
        gradient: 'from-green-500 to-green-700',
        content: (
          <div>
            <div className="text-xs mb-1">DELHI NCR</div>
            <div className="text-sm font-bold">NOV 2, 2025</div>
            <div className="text-xs mt-1">India Gate</div>
          </div>
        )
      },
      {
        gradient: 'from-purple-500 to-purple-700',
        content: (
          <div>
            <div className="text-xs mb-1">BANGALORE</div>
            <div className="text-sm font-bold">NOV 18, 2025</div>
            <div className="text-xs mt-1">Tech Hub</div>
          </div>
        )
      },
      {
        gradient: 'from-orange-500 to-orange-700',
        content: (
          <div>
            <div className="text-xs mb-1">PUNE</div>
            <div className="text-sm font-bold">DEC 5, 2025</div>
            <div className="text-xs mt-1">Cultural Center</div>
          </div>
        )
      },
      {
        gradient: 'from-red-500 to-red-700',
        content: (
          <div>
            <div className="text-xs mb-1">HYDERABAD</div>
            <div className="text-sm font-bold">DEC 20, 2025</div>
            <div className="text-xs mt-1">HITEC City</div>
          </div>
        )
      },
      {
        gradient: 'from-yellow-500 to-yellow-700',
        content: (
          <div>
            <div className="text-xs mb-1">JAIPUR</div>
            <div className="text-sm font-bold">JAN 10, 2026</div>
            <div className="text-xs mt-1">Pink City</div>
          </div>
        )
      },
      {
        gradient: 'from-pink-500 to-pink-700',
        content: (
          <div>
            <div className="text-xs mb-1">AHMEDABAD</div>
            <div className="text-sm font-bold">JAN 25, 2026</div>
            <div className="text-xs mt-1">Sabarmati</div>
          </div>
        )
      },
      {
        gradient: 'from-cyan-500 to-cyan-700',
        content: (
          <div>
            <div className="text-xs mb-1">KOCHI</div>
            <div className="text-sm font-bold">FEB 8, 2026</div>
            <div className="text-xs mt-1">Backwaters</div>
          </div>
        )
      },
      {
        gradient: 'from-emerald-500 to-emerald-700',
        content: (
          <div>
            <div className="text-xs mb-1">LUCKNOW</div>
            <div className="text-sm font-bold">FEB 22, 2026</div>
            <div className="text-xs mt-1">Heritage City</div>
          </div>
        )
      }
    ],
    buttonText: 'View All Upcoming Events',
    buttonAction: () => console.log('View all upcoming meetups')
  },
  {
    id: 'past',
    title: 'Past Meetups',
    subtitle: 'Relive the memories from our amazing past gatherings',
    description: 'Take a look back at the wonderful moments we\'ve shared across different cities. These events have strengthened our community bonds and created lasting friendships.',
    stats: [
      { label: 'Events', value: '17 Completed' },
      { label: 'Cities', value: '9 Locations' },
      { label: 'Attendees', value: '850+ Members' }
    ],
    photos: [
      {
        gradient: 'from-slate-500 to-slate-700',
        content: (
          <div>
            <div className="text-xs mb-1">DELHI NCR</div>
            <div className="text-sm font-bold">FEB 9, 2025</div>
            <div className="text-xs mt-1">50 Members</div>
          </div>
        )
      },
      {
        gradient: 'from-teal-500 to-teal-700',
        content: (
          <div>
            <div className="text-xs mb-1">AMRITSAR</div>
            <div className="text-sm font-bold">MAR 15, 2025</div>
            <div className="text-xs mt-1">Golden Temple</div>
          </div>
        )
      },
      {
        gradient: 'from-rose-500 to-rose-700',
        content: (
          <div>
            <div className="text-xs mb-1">KOLKATA</div>
            <div className="text-sm font-bold">APR 22, 2025</div>
            <div className="text-xs mt-1">Cultural Meet</div>
          </div>
        )
      },
      {
        gradient: 'from-indigo-500 to-indigo-700',
        content: (
          <div>
            <div className="text-xs mb-1">CHENNAI</div>
            <div className="text-sm font-bold">MAY 10, 2025</div>
            <div className="text-xs mt-1">Tech Connect</div>
          </div>
        )
      },
      {
        gradient: 'from-amber-500 to-amber-700',
        content: (
          <div>
            <div className="text-xs mb-1">MUMBAI</div>
            <div className="text-sm font-bold">JAN 20, 2025</div>
            <div className="text-xs mt-1">Film City</div>
          </div>
        )
      },
      {
        gradient: 'from-lime-500 to-lime-700',
        content: (
          <div>
            <div className="text-xs mb-1">GOA</div>
            <div className="text-sm font-bold">DEC 15, 2024</div>
            <div className="text-xs mt-1">Beach Meet</div>
          </div>
        )
      },
      {
        gradient: 'from-violet-500 to-violet-700',
        content: (
          <div>
            <div className="text-xs mb-1">BHOPAL</div>
            <div className="text-sm font-bold">NOV 8, 2024</div>
            <div className="text-xs mt-1">Lake City</div>
          </div>
        )
      },
      {
        gradient: 'from-sky-500 to-sky-700',
        content: (
          <div>
            <div className="text-xs mb-1">CHANDIGARH</div>
            <div className="text-sm font-bold">OCT 25, 2024</div>
            <div className="text-xs mt-1">Rock Garden</div>
          </div>
        )
      },
      {
        gradient: 'from-fuchsia-500 to-fuchsia-700',
        content: (
          <div>
            <div className="text-xs mb-1">VADODARA</div>
            <div className="text-sm font-bold">SEP 18, 2024</div>
            <div className="text-xs mt-1">Palace Meet</div>
          </div>
        )
      }
    ],
    buttonText: 'View All Past Events',
    buttonAction: () => console.log('View all past meetups')
  }
];