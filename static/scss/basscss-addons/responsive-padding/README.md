# Basscss Responsive Padding

Responsive padding utilities module for Basscss - http://basscss.com

Padding utilities are based on a global white space scale defined with variables.
These utilities use a shorthand naming convention.

## Naming Convention

<div class="overflow-scroll">
  <table class="mb2 bg-darken-1 rounded table-light">
    <thead class="bg-darken-1">
      <tr> <th>Shorthand</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>m</td> <td>Margin</td> </tr>
      <tr> <td>p</td> <td>Padding</td> </tr>
      <tr> <td>t</td> <td>Top</td> </tr>
      <tr> <td>r</td> <td>Right</td> </tr>
      <tr> <td>b</td> <td>Bottom</td> </tr>
      <tr> <td>l</td> <td>Left</td> </tr>
      <tr> <td>x</td> <td>X-axis (left and right)</td> </tr>
      <tr> <td>y</td> <td>Y-axis (top and bottom)</td> </tr>
      <tr> <td>1</td> <td>--space-1 (default .5rem)</td> </tr>
      <tr> <td>2</td> <td>--space-2 (default 1rem)</td> </tr>
      <tr> <td>3</td> <td>--space-3 (default 2rem)</td> </tr>
      <tr> <td>4</td> <td>--space-4 (default 4rem)</td> </tr>
    </tbody>
  </table>
</div>

## Prefix Naming Convention
These styles follow the same breakpoint prefix convention as other Basscss modules.

<div class="overflow-scroll">
  <table class="mb2 table-light overflow-hidden border rounded">
    <thead class="bg-darken-1">
      <tr> <th>Prefix</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>(no prefix)</td> <td>Not scoped to a breakpoint</td> </tr>
      <tr> <td>sm-</td> <td>--breakpoint-sm (default: min-width 40em)</td> </tr>
      <tr> <td>md-</td> <td>--breakpoint-md (default: min-width 52em)</td> </tr>
      <tr> <td>lg-</td> <td>--breakpoint-lg (default: min-width 64em)</td> </tr>
    </tbody>
  </table>
</div>

Change or reset default padding using the global white space scale.

## Larger padding at wider breakpoints

```html
<div class="p1 sm-p2 md-p3 lg-p4">Hamburger</div>
```

