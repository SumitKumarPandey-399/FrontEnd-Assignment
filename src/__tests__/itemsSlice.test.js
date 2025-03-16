import itemsReducer, { selectItem } from '../features/items/itemsSlice';

describe('itemsSlice', () => {
  it('should handle selectItem', () => {
    const previousState = { list: [], status: 'idle', selectedItem: null };
    const selected = { id: 1, title: 'Test Post' };
    const nextState = itemsReducer(previousState, selectItem(selected));
    expect(nextState.selectedItem).toEqual(selected);
  });
});