import { describe, expect, test } from 'vitest'
import { nextId, addNewItem, changeDone } from './domain'

describe('test domain todo', () => {
  describe('test addNewItem function', () => {
    test('should return new item in list from empty list', () => {
      const add = addNewItem([])
      const item = {
        value: 'test',
        isDone: false
      }

      expect(add('test')).toEqual([{ id: 1, ...item}])
    })
    test('should return item in list from list with 1 item', () => {
      const list =  [{
        id: 1,
        value: 'good',
        isDone: false,
      }]
      const add = addNewItem(list)
      const item = {
        value: 'test',
        isDone: false
      }

      expect(add(item.value)).toEqual([{ id: 2, ...item}, ...list])
    })
  })
  describe('test changeDone function', () => {
    test('should checked item in list from list with 1 item', () => {
      const list =  [{
        id: 1,
        value: 'good',
        isDone: false,
      }]
      const changeDone = doneItem(list)
      expect(changeDone(1)).toEqual([{...list[0], isDone: true }])
    })

  })

  describe('test nextId function', () => {
    test('should return 2 when as 1 item in list with id: 1', () => {
      const list = [
        {
          id: 1,
          value: 'test',
          isDone: false
        }
      ];

      expect(nextId(list)).toEqual(2)
    })
    test('should return 1 when list is empty', () => {
      expect(nextId([])).toEqual(1)
    })
    test('should return 5 when as 4 item in list with id', () => {
      const list = [
        {
          id: 1,
          value: 'test',
          isDone: false
        },
        {
          id: 4,
          value: 'test',
          isDone: false
        }

      ];

      expect(nextId(list)).toEqual(5)
    })

  })
})
