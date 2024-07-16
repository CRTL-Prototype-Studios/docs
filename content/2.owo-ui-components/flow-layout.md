---
title: "Flow Layout"
description: "The Flow Layout Component."
category: owo-ui
---

The flow layout component arranges its children in a vertical or horizontal flow. It supports various alignment and sizing options.

## Parameters

::field-group
  ::field{name='direction' type='vertical | horizontal | ltr-text-flow' required}
  The direction of the flow layout.
  ::
  ::field{name='gap' type='int'}
  The gap between child components in pixels.
  ::
  ::field{name='padding' type='int | (int,int,int,int)'}
  The padding around the child components.
  ::
  ::field{name='surface' type='#hex'}
  The background surface of the flow layout.
  ::
  ::field{name='horizontal-alignment' type='left | right | center'}
  The horizontal alignment of the child components.
  ::
  ::field{name='vertical-alignment' type='top | middle | bottom'}
  The vertical alignment of the child components.
  ::
  ::field{name='allow-overflow' type='boolean'}
  Whether to allow child components to overflow the bounds of the flow layout.
  ::
::

## Examples

::code-group
```java [FlowLayout.java]
Containers.verticalFlow(Sizing.fill(100), Sizing.content())
    .child(Components.label(Text.literal("Item 1")))
    .child(Components.label(Text.literal("Item 2")))
    .gap(10)
    .padding(Insets.of(20))
    .surface(Surface.PANEL)
    .horizontalAlignment(HorizontalAlignment.CENTER)
    .verticalAlignment(VerticalAlignment.CENTER)
```

```xml [flow-layout.xml]
<flow-layout direction="vertical">
    <children>
        <label>
            <text>Item 1</text>
        </label>
        <label>
            <text>Item 2</text>
        </label>
    </children>
    <gap>10</gap>
    <padding>
        <all>20</all>
    </padding>
    <surface>
        <panel/>
    </surface>
    <horizontal-alignment>center</horizontal-alignment>
    <vertical-alignment>center</vertical-alignment>
</flow-layout>
```
::
