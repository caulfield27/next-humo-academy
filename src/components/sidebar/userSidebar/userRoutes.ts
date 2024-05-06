export interface IlinksType{
    path:string,
    name:string,
}

export const logedLinks:IlinksType[] = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/library',
        name: 'Library'
    },
    {
        path: '/quizes',
        name: 'Quizes'
    },
    {
        path: '/courses',
        name: 'Academy courses'
    },
    {
        path: '/mentors',
        name: 'Our mentors'
    },
]