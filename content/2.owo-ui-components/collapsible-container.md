---
title: "Collapsible Container"
description: "The Collapsible Container Component."
category: owo-ui
---

The collapsible container component allows you to create a collapsible section that can be expanded or collapsed. It supports a title text and various sizing and alignment options.

## Parameters

- `expanded`: Whether the collapsible container is initially expanded or not.
- `text`: The title text of the collapsible container.
- `padding`: The padding around the child components.
- `surface`: The background surface of the collapsible container.
- `horizontal-alignment`: The horizontal alignment of the child components.
- `vertical-alignment`: The vertical alignment of the child components.
- `allow-overflow`: Whether to allow child components to overflow the bounds of the collapsible container.

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
