import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 0, name: 'Dr IQ' },
        { id: 1, name: 'Mr. Nice' },
        { id: 2, name: 'Narco' },
        { id: 3, name: 'Bombasto' },
        { id: 4, name: 'Celeritas' },
        { id: 5, name: 'Magneta' },
        { id: 6, name: 'RubberMan' },
        { id: 7, name: 'Dynama' },
        { id: 8, name: 'Dr IQ' },
        { id: 9, name: 'Magma' },
        { id: 10, name: 'Dr IQ' },
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}