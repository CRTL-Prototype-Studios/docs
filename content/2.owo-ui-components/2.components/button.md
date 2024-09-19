---
title: 'Button'
description: 'The Button Component.'
category: owo-ui
---

The button component represents a clickable button. It can display text and respond to click events.

## Parameters

::field-group
  ::field{name="text" type="string" required}
  The text to display on the button.
  ::
  ::field{name="active" type="boolean"}
  Whether the button is active or not.
  ::
  ::field{name="renderer"}
  The button renderer to use for custom button styles.
  ::
::

## Examples

::code-group
```java [Button.java]
Components.button(Text.literal("Click me!"), button -> {
    // Handle button click event
})
```

```xml [buttom.xml]
<button>
    <text>Click me!</text>
    <active>true</active>
</button>
```
::
