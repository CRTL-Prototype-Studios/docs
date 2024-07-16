---
title: "Label"
description: "The Label Component."
category: owo-ui
---

The label component is used to display text on the screen. It supports various text alignment options and can be styled with different colors and shadow effects.

## Parameters

::field-group
  ::field{name='text' type='string' required}
  The text to display in the label.
  ::
  ::field{name='max-width' type='int'}
  The maximum width of the label in pixels.
  ::
  ::field{name='line-height' type='int'}
  The line height of the text in pixels.
  ::
  ::field{name='color' type='red | yellow | blue | green | gray | purple | ...'}
  The color of the text.
  ::
  ::field{name='shadow' type='boolean'}
  Whether to apply a shadow effect to the text.
  ::
  ::field{name='horizontal-alignment' type='left | right | center'}
  The horizontal alignment of the child components.
  ::
  ::field{name='vertical-alignment' type='top | middle | bottom'}
  The vertical alignment of the child components.
  ::
::

## Examples

::code-group
```java [Label.java]
Components.label(Text.literal("Hello, World!"))
    .color(0xffffff)
    .shadow(true)
    .horizontalTextAlignment(HorizontalAlignment.CENTER)
    .verticalTextAlignment(VerticalAlignment.CENTER)
```

```xml [label.xml]
<label>
    <text>Hello, World!</text>
    <color>#ffffff</color>
    <shadow>true</shadow>
    <horizontal-text-alignment>center</horizontal-text-alignment>
    <vertical-text-alignment>center</vertical-text-alignment>
</label>
```
::
