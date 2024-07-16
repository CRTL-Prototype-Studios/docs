---
title: "Collapsible Container"
description: "The Collapsible Container Component."
category: owo-ui
---

The collapsible container component allows you to create a collapsible section that can be expanded or collapsed. It supports a title text and various sizing and alignment options.

## Parameters

::field-group
  ::field{name='expanded' type='boolean'}
  Whether the collapsible container is initially expanded or not.
  ::
  ::field{name='text' type='string'}
  The title text of the collapsible container.
  ::
  ::field{name='padding' type='int | (int,int,int,int)'}
  The padding around the child components.
  ::
  ::field{name='surface' type='#hex'}
  The background surface of the collapsible container.
  ::
  ::field{name='horizontal-alignment' type='left | right | center'}
  The horizontal alignment of the child components.
  ::
  ::field{name='vertical-alignment' type='top | middle | bottom'}
  The vertical alignment of the child components.
  ::
  ::field{name='allow-overflow' type='boolean'}
  Whether to allow the dropdown entries to overflow the bounds of the collapsible container.
  ::
::

## Examples

::code-group
```java [CollapsibleContainer.java]
Containers.collapsible(Text.literal("Collapsible Section"), true)
    .child(Components.label(Text.literal("Content")))
    .padding(Insets.of(10))
    .surface(Surface.PANEL)
    .horizontalAlignment(HorizontalAlignment.CENTER)
    .verticalAlignment(VerticalAlignment.CENTER)
```

```xml [collapsible-container.xml]
<collapsible expanded="true">
    <text>Collapsible Section</text>
    <children>
        <label>
            <text>Content</text>
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
</collapsible>
```
::
