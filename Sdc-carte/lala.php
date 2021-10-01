<?php
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) : ?>
    <tr>
        <td>
            <?php echo htmlspecialchars($row['maille_nom']); ?>
        </td>
        <td>
            <?php echo htmlspecialchars($row['cas_confirmes']); ?>
        </td>
        <td>
            <?php echo htmlspecialchars($row['deces']); ?>
        </td>
    </tr>
<?php endwhile; ?>