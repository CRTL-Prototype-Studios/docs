---
title: Slider
description: "The Slider Component."
category: owo-ui
---

# Slider

The slider component represents a draggable slider for selecting a value within a range.

## Parameters

::field-group
  ::field{name="text" type="string" required}
  The text to display alongside the slider.
  ::
  ::field{name="value" type="int"}
  The current value of the slider.
  ::
  ::field{name="active" type="boolean"}
  Whether the slider is active or not.
  ::
::

## Examples

::code-group
```java [Slider.java]
Components.slider(0.5)
    .text(Text.literal("Volume"))
    .active(true)
```

```xml [slider.xml]
<slider>
    <text>Volume</text>
    <value>0.5</value>
    <active>true</active>
</slider>
```
::
