---
title: "Grid Layout"
description: "The Grid Layout Component."
category: owo-ui
---

The grid layout component arranges its children in a grid with a specified number of rows and columns. It supports various alignment and sizing options.

## Parameters

::field-group
::field{name='rows' type='int' required}
The number of rows in the grid.
::
  ::field{name='columns' type='int' required}
  The number of columns in the grid.
  ::
  ::field{name='gap' type='int'}
  The gap between child components in pixels.
  ::
  ::field{name='padding' type='int | (int,int,int,int)'}
  The padding around the child components.
  ::
  ::field{name='surface' type='#hex'}
  The background surface of the grid layout.
  ::
  ::field{name='horizontal-alignment' type='left | right | center'}
  The horizontal alignment of the child components within each cell.
  ::
  ::field{name='vertical-alignment' type='top | middle | bottom'}
  The vertical alignment of the child components within each cell.
  ::
  ::field{name='allow-overflow' type='boolean'}
  Whether to allow child components to overflow the bounds of the grid layout.
  ::
::

## Examples

::code-group
```java [GridLayout.java]
Containers.grid(2, 2)
    .child(Components.label(Text.literal("Cell 1")))
    .child(Components.label(Text.literal("Cell 2")))
    .child(Components.label(Text.literal("Cell 3")))
    .child(Components.label(Text.literal("Cell 4")))
    .padding(Insets.of(10))
    .surface(Surface.PANEL)
    .horizontalAlignment(HorizontalAlignment.CENTER)
    .verticalAlignment(VerticalAlignment.CENTER)
```

```xml [grid-layout.xml]
<grid-layout rows="2" columns="2">
    <children>
        <label>
            <text>Cell 1</text>
        </label>
        <label>
            <text>Cell 2</text>
        </label>
        <label>
            <text>Cell 3</text>
        </label>
        <label>
            <text>Cell 4</text>
        </label>
    </children>
    <padding>
        <all>10</all>
    </padding>
    <surface>
        <panel/>
    </surface>
    <horizontal-alignment>center</horizontal-alignment>
    <vertical-alignment>center</vertical-alignment>
</grid-layout>
```
::
