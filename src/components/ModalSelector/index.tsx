import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface ModalSelectorProps {
  options: { label: string; value: string }[]; // Options array
  selectedValue: string | null; // Current selected value
  placeholder?: string; // Placeholder text
  label?: string; // Label text above the selector
  onSelect: (value: string) => void; // Callback when an option is selected
}

const ModalSelector: React.FC<ModalSelectorProps> = ({
  options,
  selectedValue,
  placeholder = 'Select an option',
  label,
  onSelect,
}) => {
  const [visible, setVisible] = useState(false); // Modal visibility state

  const handleSelect = (value: string) => {
    onSelect(value); // Pass selected value back
    setVisible(false); // Close modal
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      {/* Touchable to open the modal */}
      <TouchableOpacity
        style={styles.selectorContainer}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.selectorText}>
          {selectedValue
            ? options.find(option => option.value === selectedValue)?.label
            : placeholder}
        </Text>
      </TouchableOpacity>

      {/* Modal for displaying options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select an Option</Text>
            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionContainer}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  selectorContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
  },
  selectorText: {
    fontSize: 16,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  optionContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
    fontSize: 16,
  },
});

export default ModalSelector;
