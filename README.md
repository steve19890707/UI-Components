# Muscle UI Components (beta)

It's components for React, now is beta version, release will be come in future.
### [develop using packages]
- react-icons(4.4.0)
- styled-components(5.3.5)
- lodash(4.17.21)

## Components Using

component params guide.
### 📌 DropInput

| object | Params | Type |
| ------ | ------ | ------ |
| datalist | default: empty array (*inset must be use object: { value,...etc }*) | array |
| theme | light / dark | string |
| width | [default: 180px] (number) + px / % / rem ...etc | string |
| fontSize | [default: 14px] (number) + px / % / rem ...etc | string |
| placeholder | default: 'select' | string |
| emptyValue | default: 'data not found' | string |
| onClick | call your event, return: object | function |

### 📌 Button

| object | Params | Type |
| ------ | ------ | ------ |
| theme | light / dark | string |
| text | default: button | string |
| width | [default: 180px] (number) + px / % / rem ...etc | string |
| fontSize | [default: 14px] (number) + px / % / rem ...etc | string |
| onClick | call your event | function |

### 📌 Switch

| object | Params | Type |
| ------ | ------ | ------ |
| theme | light / dark | string |
| size | [default: 50px] (number) + px / % / rem ...etc | string |
| onChange | call your event, return: Boolen | function |

### 📌 Input

| object | Params | Type |
| ------ | ------ | ------ |
| datalist | default: empty array | array |
| theme | light / dark | string |
| width | [default: 180px] (number) + px / % / rem ...etc | string |
| fontSize | [default: 14px] (number) + px / % / rem ...etc | string |
| placeholder | default: 'select' | string |
| onChange | call your event, return: value(string) | function |


### 📌 Date Picker
| object | Params | Type |
| theme | light / dark | string |
| width | [default: 180px] (number) + px / % / rem ...etc | string |
| onClick | call your eventt, return: object { selected: moment(pick date) } | function |
