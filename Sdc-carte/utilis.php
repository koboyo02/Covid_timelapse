<table class="table table-striped table-dark danger">
    <thead class="thead-dark">
        <tr>
            <th scope="col">cas_confirmes</th>
            <th scope="col">deces</th>
        </tr>
    </thead>
    <tbody>
        <?php
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) : ?>
            <tr>
                <td>
                    <?php if ($row['maille_nom'] == 'Gironde') {
                        echo htmlspecialchars($row['cas_confirmes']);
                    } ?>
                </td>
                <td>
                    <?php if ($row['maille_nom'] == 'Gironde') {
                        echo htmlspecialchars($row['deces']);
                    } ?>
                </td>
            </tr>
        <?php endwhile; ?>
    </tbody>
</table>