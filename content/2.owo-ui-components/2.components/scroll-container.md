---
title: "Scroll Container"
description: "The Scroll Container Component."
category: owo-ui
---

The scroll container component creates a scrollable area for its child components. It supports vertical and horizontal scrolling, customizable scrollbars, and various sizing and alignment options.

## Parameters

::field-group
  ::field{name='direction' type='vertical | horizontal' required}
  The direction of the scroll container.
  ::
  ::field{name='scrollbar-thiccness' type='int'}
  The thickness of the scrollbar in pixels.
  ::
  ::field{name='fixed-scrollbar-length' type='int'}
  The fixed length of the scrollbar in pixels.
  ::
  ::field{name='scrollbar-color' type='red | yellow | blue | green | gray | purple | ...'}
  The color of the scrollbar.
  ::
  ::field{name='scrollbar'}
  The scrollbar renderer to use for custom scrollbar styles.
  ::
  ::field{name='gap' type='int'}
  The gap between child components in pixels.
  ::
  ::field{name='padding' type='int | (int,int,int,int)'}
  The padding around the child components.
  ::
  ::field{name='surface' type='#hex'}
  The background surface of the scroll container.
  ::
  ::field{name='horizontal-alignment' type='left | right | center'}
  The horizontal alignment of the child components.
  ::
  ::field{name='vertical-alignment' type='top | middle | bottom'}
  The vertical alignment of the child components.
  ::
  ::field{name='allow-overflow' type='boolean'}
  Whether to allow child components to overflow the bounds of the scroll container.
  ::
::

## Examples

::code-group
```java [ScrollContainer.java]
Containers.verticalScroll(Sizing.fill(100), Sizing.content())
    .child(Components.label(Text.literal("Item 1")))
    .child(Components.label(Text.literal("Item 2")))
    .child(Components.label(Text.literal("Item 3")))
    .scrollbarThiccness(10)
    .scrollbarColor(0xff0000)
    .padding(Insets.of(10))
    .surface(Surface.PANEL)
```

```xml [scroll-container.xml]
<scroll direction="vertical">
    <children>
        <label>
            <text>Item 1</text>
        </label>
        <label>
            <text>Item 2</text>
        </label>
        <label>
            <text>Item 3</text>
        </label>
    </children>
    <scrollbar-thiccness>10</scrollbar-thiccness>
    <scrollbar-color>#ff0000</scrollbar-color>
    <padding>
        <all>10</all>
    </padding>
    <surface>
        <panel/>
    </surface>
</scroll>
```
::
