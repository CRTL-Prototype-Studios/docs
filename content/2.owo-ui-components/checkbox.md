---
title: "Checkbox"
description: "The Checkbox Component."
category: owo-ui
---

The checkbox component represents a toggleable checkbox. It can display text alongside the checkbox.

## Parameters
::field-group
  ::field{name='text' type='string'}
  The text to display next to the checkbox.
  ::
  ::field{name='checked' type='boolean'}
  Whether the checkbox is checked or not.
  ::
  ::field{name='active' type='boolean'}
  Whether the checkbox is active or not.
  ::
::

## Examples

::code-group
```java [Checkbox.java]
Components.checkbox(Text.literal("Option"), true)
    .active(false)
```

```xml [checkbox.xml]
<checkbox>
    <text>Option</text>
    <checked>true</checked>
    <active>false</active>
</checkbox>
```
::
