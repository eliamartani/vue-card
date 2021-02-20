# vue-card

It will create a card that follows mouse move. It'll follow mouse's perspective.

## Using it

Just:

```bash
npm i vue-card
```

> Missing packaged published from my side, my bad.

Then:

```html
<Card
  :constrain="constrain"
  :perspective="perspective"
>
  <!-- Content -->
</Card>
```

```js
import Card from 'vue-card'

{
  components: {
    Card
  },
  data() {
    return {
      /* Example */
      constrain: 30,
      perspective: '500px'
    }
  }
}
```

Finally:

Style it

---

Made with vite 2

Still in progress...

- [ ] Better config lib