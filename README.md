<p>
  <a href="https://npm-stat.com/charts.html?package=vue-virtual-draglist">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/vue-virtual-draglist.svg">
  </a>
  <a href="https://www.npmjs.com/package/vue-virtual-draglist">
    <img alt="Version" src="https://img.shields.io/npm/v/vue-virtual-draglist.svg"/>
  </a>
</p>

A virtual scrolling list component that can be sorted by dragging , for Vue



## Simple usage

```bash
npm i vue-virtual-draglist -D
```

Root component:
```vue
<template>
  <div>
    <virtual-drag-list
      :data-key="'id'"
      :data-source="list"
      @top="handleToTop"
      @bottom="handleToBottom"
      @ondragend="ondragend"
    >
      <template slot="item" slot-scope="{ record, index, dataKey }">
        <span draggable="true">{{ record.id }}</span>
        {{ record.text }}
      </template>
      <template slot="header">
        <div class="loading">top loading...</div>
      </template>
      <template slot="footer">
        <div class="loading">bottom loading...</div>
      </template>
    </virtual-drag-list>
  </div>
</template>

<script>
  import virtualDragList from 'vue-virtual-draglist'

  export default {
    name: 'root',
    data () {
      return {
        list: [{id: '1', text: 'asd'}, {id: '2', text: 'fgh'}, ...]
      }
    },
    components: { virtualDragList },
    methods: {
      handleToTop() {
        ...
      },
      handleToBottom() {
        ...
      },
      ondragend(list) {
        console.log(list)
      }
    }
  }
</script>
```
## Emits

| **emit** | **Description** |
|-------------|--------------|
| `top`       | event fired when scroll to top |
| `bottom`    | event fired when scroll to bottom |
| `ondragend` | event fired when the drag is complete, return a new array |

## Props type

### Required props

| **Prop** | **Type**  | **Description** |
|------------------|-------------|------------------|
| `data-key`       | String      | The unique identifier of each piece of data, in the form of `'a.b.c'` |
| `data-source`    | Array       | data list  |

### Optional props

<details open>
  <summary><strong>Commonly used</strong></summary>
  <p></p>
  <table>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>keeps</code></td>
      <td>Number</td>
      <td>30</td>
      <td>the number of lines rendered by the virtual scroll</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>Number</td>
      <td>50</td>
      <td>The estimated height of each piece of data, you can choose to pass it or not, it will be automatically calculated</td>
    </tr>
    <tr>
      <td><code>draggable</code></td>
      <td>Boolean</td>
      <td>true</td>
      <td>whether to support drag and drop. You need to specify a draggable element and set the `draggable` attribute for it</td>
    </tr>
  </table>
</details>

<details open>
  <summary><strong>Uncommonly used</strong></summary>
  <p></p>
  <table>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>delay</code></td>
      <td>Number</td>
      <td><code>10</code></td>
      <td>Delay time of debounce function</td>
    </tr>
    <tr>
      <td><code>dragElement</code></td>
      <td>Function</td>
      <td><code>-</code></td>
      <td>The function that selects the dragged element, <b>must have a return value with a dom node</b>, has two parameters: e(the currently selected element), parent(the parent node of the list)</td>
    </tr>
    <tr>
      <td><code>headerTag</code></td>
      <td>String</td>
      <td><code>div</code></td>
      <td>Label type for header slot</td>
    </tr>
    <tr>
      <td><code>footerTag</code></td>
      <td>String</td>
      <td><code>div</code></td>
      <td>Label type for footer slot</td>
    </tr>
    <tr>
      <td><code>itemTag</code></td>
      <td>String</td>
      <td><code>div</code></td>
      <td>item's tag type</td>
    </tr>
    <tr>
      <td><code>itemStyle</code></td>
      <td>Object</td>
      <td><code>{}</code></td>
      <td>item's style</td>
    </tr>
    <tr>
      <td><code>itemClass</code></td>
      <td>String</td>
      <td><code>''</code></td>
      <td>item's class</td>
    </tr>
    <tr>
      <td><code>dragStyle</code></td>
      <td>Object</td>
      <td><code>{}</code></td>
      <td>mask style when dragging</td>
    </tr>
  </table>
</details>

### Public methods

<details open>
  <summary><strong>Usefull public methods</strong></summary>
  <p></p>
  <p>Use <code><a href="https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements">ref</a></code> to get the method inside the component</p>
  <table>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>scrollToBottom()</code></td>
      <td>scroll to bottom of list</td>
    </tr>
    <tr>
      <td><code>scrollToTop()</code></td>
      <td>scroll to top of list</td>
    </tr>
    <tr>
      <td><code>scrollToIndex(index)</code></td>
      <td>scroll to the specified index position</td>
    </tr>
    <tr>
      <td><code>scrollToOffset(offset)</code></td>
      <td>scroll to the specified height</td>
    </tr>
    <tr>
      <td><code>getSize(dataKey)</code></td>
      <td>get the height of the current item by unique key value</td>
    </tr>
    <tr>
      <td><code>getOffset()</code></td>
      <td>get the current scroll height</td>
    </tr>
    <tr>
      <td><code>reset()</code></td>
      <td>reset to initial</td>
    </tr>
  </table>
</details>
