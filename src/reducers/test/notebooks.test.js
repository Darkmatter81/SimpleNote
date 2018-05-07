import * as actions from '../../actions/notebooks';
import reducer from '../notebooks'; 

describe ('Notebook reducer', ()=>{
    it('Should return default empty state', ()=>{
        expect(reducer(undefined, {})).toEqual({})
    });

    it('State should have a list of notebooks', ()=>{
        const expected = {notebooks: getNotebooks()};
        expect(
            reducer({}, { 
                type: actions.RECEIVE_NOTEBOOKS,
                notebooks: getNotebooks(),
            })
        )
        .toEqual(expected);
    });
});

const getNotebooks = () => {
    return [
        {
            id: '1234',
            createdDate: '2017-09-23T19:50:54.427Z',
            name: 'My notebook',
            notes: ['3456', '7890', '0123']
        },
        {
            id: '1234',
            createdDate: '2017-09-23T19:50:54.427Z',
            name: 'My notebook',
            notes: ['3456', '7890', '0123']
        }
    ];
}